

const myDiv = document.getElementById("email");
// button 클릭 이벤트
document.getElementById("myButton").onclick = () => {
// div의 내용(textContent)을 복사한다.
window.navigator.clipboard.writeText(myDiv.textContent).then(() => {
    // 복사가 완료되면 호출된다.
    alert("Email adress is copied!");
});
};


function scrollToBottom()
{
    var height = document.body.scrollHeight;
    window.scroll(0 , height);
}