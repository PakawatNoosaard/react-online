import React from "react";

const Sidebar = () => {

//let fullname = 'John'

const [fullname,setFullname] = React.useState('John')

const [isShow, setIsshow] = React.useState(true)

const changeName = () => {
    //fullname = "Marry"
    setFullname("Marry")
    setIsshow(false)
}

React.useEffect(() => {
    console.log("sidebar useEffect")
    //ทำงานครั้งแรกที่ render component และ ทำงานทุกครั้งที่มีการอัพเดท ui
})

React.useEffect(() => {
    console.log("sidebar useEffect one time only")
    //ครั้งแรกครังเดียวพอ ครั้งที่ render component
},[])

React.useEffect(() => {
    console.log("sidebar useEffect fullname")
    //ครั้งแรกครังเดียวพอ ครั้งที่ render component และทำงานอีกครั้งที่ fullname มีการเปลี่ยนแปลง
},[fullname])

return (
    <>
    <p>สวัสดี {fullname}</p>
    {
        isShow ? <p>Hello</p> : <p>World</p>
    }
    <button onClick={changeName}>Change name</button>
    </>
)

}

export default Sidebar