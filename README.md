# Pointy Wizard

To check out the project, run the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO

- [ ] write tests for the comipiling process and what accompnnying pointy syntax it should produce
- [ ] create a means to compile the diagram syntax to pointy lang
- [ ] figure out how to embed a text editor in the canvas

### Done

- [x] make it such that when the diamond is clicked the correct node is selected
- [x] create all the panels that are supposed to be on the canvas for actions to be done
- [x] I have to think about what I'm going to be using to delete nodes that are created by the user
- [x] create a custom node for the decision node
- [x] the control pane that holds all the things you could select seems to be behing the canvas, think of how you can bring
- [x] create behaviour for the onEventClick
- [x] create a custom node that has the </Handle> on the right of it. for now there's no need to have a custom versino
- [x] create a global store that holds the node data in the memory of the browser(localStorage would be useful for something like this)[link](https://react.dev/reference/react/useSyncExternalStore) might be useful for my use case

### Backlog

- [ ] save functionality that saves the result of the pipeline onto the users pc or something of the sort. think of what format you want to save the results in. which means I'm going to have to have some zustand state management where I'm going to keep everything and then dump it into the json file.
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
