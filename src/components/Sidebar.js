import React from 'react'

const Sidebar = () => {

    //let fullname = 'John'

    const [fullname,setFullname] = React.useState('John')
    
    const [isShow,setIsShow] = React.useState(true)
    
    const changeName = () =>{
        setFullname('Marry')
        setIsShow(false)
    }

    React.useEffect(() => {
        console.log("sidebar useeffect")
        //ทำงานครั้งแรกที่ render และ update
    })

    React.useEffect(() => {
        console.log("sidebar useeffect onetime ")
        //ทำงานครั้งแรกที่ render 
    },[])
    
    React.useEffect(() => {
        console.log("sidebar useeffect fullname")
        //ทำงานครั้งแรกที่ render หรือ fullname เปลี่ยน stage
    },[fullname])

    return (
        <>
            <p>สวัสดี {fullname}</p>
            {
                isShow ? <p>Hello</p> : <p>World</p> 
            }
            <button onClick={changeName}>Change Name</button>

        </>
    )
}

export default Sidebar
