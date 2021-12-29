import React from 'react'
import Button from '../styles/button/Button'
import Title from '../styles/title/Title'
import Logo from './Logo'

const Header = () => {

    let companyName = "TNI"
    const companyAddress = <p>Bangkok</p>
    let number = 10

    const showMessage = () => {
        return "Hello " + companyName + ".com"
    }

    const isLogin = false;

    const showME = () => {
        alert('Hello React')
    }
    
    const products = [
        {id: 1, name: "Coke"},
        {id: 2, name: "Pepsi"}
    ]

    return (
        <div>
            <Title>Project React</Title>

            <h1>{showMessage()}</h1>
            {companyAddress}
            {number * 2}
            <p>{showMessage()}</p>

            {
                isLogin === true ?  (                    
                    <>
                    <p>welcome, student</p>
                    </>
                    ) : (
                        <p>welcome, teacher</p>
                    )
            }
            {
                isLogin ? <Logo/> : <p>unlock</p>
            }

            {/* Workshop 2 */}
            <Button keyword="correct" onClick={showME}>
                Click me
            </Button>
            <Button keyword="not" onClick={showME}>
                Click me
            </Button>

            <ul>
            {
                products.map((product,index) => {
                    return (<li key={index}>{index+1} {product.name}</li>)
                })
            }
            </ul>

            <hr />
        </div>
    )
}

export default Header
