function printMsg(msg) {
    console.log(msg);
}
function printDate() {
    const now = new Date();
    console.log(now.toLocaleDateString());
}
export default {
    printMsg,
    printDate
};
