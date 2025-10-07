## Pointy Wizard

To check out the project, run the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TO NOTE

- the way nodes are created is by creating objects so I'm going to have to come up with a way to save the nodes that
  are created by the user for a particular pipeline.
- I need a specific way to store nodes and edges for a particular pipeline.

## TODO

- [ ] make it such that when the diamond is clicked the correct node is selected
- [ ] create a global store that holds the node data in the memory of the browser
- [ ] save functionality that saves the result of the pipeline onto the users pc or something of the sort. think of what format you want to save the results in. which means I'm going to have to have some zustand state management where I'm going to keep everything and then dump it into the json file.

### Done

- [x] I have to think about what I'm going to be using to delete nodes that are created by the user
- [x] create a custom node for the decision node
- [x] the control pane that holds all the things you could select seems to be behing the canvas, think of how you can bring
- [x] create behaviour for the onEventClick
- [x] create a custom node that has the </Handle> on the right of it. for now there's no need to have a custom versino

### Backlog

- [ ] create behaviour for the onConnectionClick
- [ ] create behaviour for the onExtrasClick
- [ ] there would also be a need to create a custom edge file that has all the edges with the different implementations
- [ ] I have to think about how I'm going to be storing the node information for a particular pipeline. check out the useStore that is provided. the behaviour of the bottom nav bar is tied to this in a way. maybe there's a way to make it less coupled
- [ ] use the built in dark theme and light theme to provide a panel that the users can click to toggle light and dark mode
- [ ] Thinking about how to delete a particular thing on the node, when creating the custom versions of the nodes, it might be useful to have like a delete thing that shows up beside the nodes and values and when clicked deletes the node
- [ ] create a custom path for the different kinds of connections that the events can have between them. it might be useful to think about whether we can just use a path label to do that or there would be a need to create a custom path with the svg path maker thing inside of the [docs](https://reactflow.dev/learn/customization/edge-labels)
- [ ] remember to check the global.css and then set a global theme
- [ ] we might probaly have to write an lsp for the pointy syntax in order to find some kind of syntax errors
- [ ] remember to the make the background variant something that you can edit and change in the settings
      it infront of it
- [ ] think of copy and past functionality
- [ ]
