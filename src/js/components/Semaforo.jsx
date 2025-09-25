import React from "react";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

export const TrafficLight = () => {
    const colors = {
        red: "red",
        yellow: "yellow",
        green: "lime",
    }
    const [activeColor, setActiveColor] = useState("null");
    const activeLight = (color) => {
        const baseColor = color;
        return {
        width: "60px", 
        height: "60px",
        backgroundColor: colors[color],
        boxShadow: activeColor === color ? `0 0 25px 10px ${colors[color]}` : "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
    }
    }
    return (
    <div className="d-flex flex-column align-items-center mt-5">
        <div className="bg-dark rounded p-3 d-flex flex-column align-items-center"style={{ width: "100px" }}>
            <div className="rounded-circle mb-3" 
                 style={activeLight("red")}
                 onClick={() => setActiveColor("red")}
                 >
            {/* Luz Roja */}
            </div>
            <div className="rounded-circle mb-3" 
                 style={activeLight("yellow")}
                 onClick={() => setActiveColor("yellow")}
                 >
            {/* Luz Amarilla */}
            </div>
            <div className="rounded-circle" 
                 style={activeLight("green")}
                 onClick={() => setActiveColor("green")}
                 >
            {/* Luz Verde */}
            </div>
        </div>
    </div>
    )
}
