namespace HelloSpace {
    function sayNothing() {
        console.log("Nothing!");
    }
    // export的元素可以被外部访问
    export function saySomething() {
        console.log("Something!");
    }
}
HelloSpace.saySomething();
// HelloSpace.sayNothing(); // <= Property 'sayNothing' does not exist