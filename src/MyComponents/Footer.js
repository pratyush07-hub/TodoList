import React from 'react'   // rafc

export const Footer = () => {
    let footerStyle = {
        width: "100%" ,
        position: "absolute" ,
        
    }
  return (
    <footer className="bg-dark text-light my-2 " style={footerStyle}>
        <p className="text-center">
            Copyright &copy; TodosList.com
        </p>
    </footer>
  )
}

export default Footer



