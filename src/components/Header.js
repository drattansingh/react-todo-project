import React from "react"

const Header=()=>
{
    const headerStyle=
    {
        padding: "20px 0",
        lineHeight: "1.5em",
    }

    const version=React.version
    return(
        <header style={headerStyle}>
            <h1
            style={{
                fontSize: "6rem",
                fontWeight: "600",
                marginBottom: "2rem",
                lineHeight: "1em",
                color: "#ececec",
                textTransform: "lowercase",
                textAlign: "center",
              }}
              >todos example headers</h1>
              <h5>React version: {version}</h5>
        </header>
    )
}

export default Header