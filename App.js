// REACT ATTRIBUTE

// var heading = React.createElement("h1",{
// id : "heading",
// xyz :"abc"
// },"Hello world from React")

// // console.log(heading)  ==> return (React Element)Objects

// var root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

// React DOM -> render converts Objects(React Elements) into html(Browser understands)



//Nested child with siblings

{/* <div id="parent">
    <div id="child1">
        <h1>Test1</h1>
        <h1>Test2</h1>
    </div>
    <div id="child2">
        <h1>Test3</h1>
        <h1>Test4</h1>
    </div>
</div> */}

const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }
        , [React.createElement("h1", {}, "Test1"),
        React.createElement("h1", {}, "Test2")
        ]),
    React.createElement("div", {
        id: "child2"
    }
        , [React.createElement("h1", {}, "Test3"),
        React.createElement("h1", {}, "Test4")
        ]),
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

// Above code make it complex -> so that JSX was introduced


// React can be apllied to one part of a web page => since it is a library (like React only as header or footer)
