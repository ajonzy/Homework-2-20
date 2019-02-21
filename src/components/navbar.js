import React from "react"
import { NavLink } from "react-router-dom"

export default function() {
    return (
        <div>
            <NavLink exact to="/"><button>Home</button></NavLink>
            <NavLink to="/counter"><button>Counter</button></NavLink>
            <NavLink to="/toggle-text"><button>Toggle Text</button></NavLink>
        </div>
    )
}