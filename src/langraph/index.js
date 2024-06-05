import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, BaseMessage } from "@langchain/core/messages";
import { END, START, MessageGraph } from "@langchain/langgraph";

const model = new ChatOpenAI({
  temperature: 0,
  // Set streaming to true to enable streaming
  streaming: true,
});

const graph = new MessageGraph()
  .addNode("model", async (state) => {
    const response = await model.invoke(state);
    return [response];
  })
  .addEdge("model", END)
  .addEdge(START, "model");

const runnable = graph.compile();

const inputs = [new HumanMessage("What is 1 + 1?")];

for await (const step of await runnable.stream(inputs)) {
  console.log(step);
}
