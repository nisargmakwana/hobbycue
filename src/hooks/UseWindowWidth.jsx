"use client";
import React, { useEffect, useState } from "react";

export function UseWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(null);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}

		// Set initial window width
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowWidth;
}
