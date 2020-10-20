
namespace HelloSpace {
    function sayNothing() {
        console.log("Nothing!");
    }

    // export的元素可以被外部访问
    export function saySomething() {
        console.log("Something!");
    }
}

//使用命名空间内容元素
HelloSpace.saySomething();
//HelloSpace.sayNothing(); // 无法访问