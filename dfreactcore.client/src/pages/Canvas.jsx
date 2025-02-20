import { useLayoutEffect, useState } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router';
import rough from 'roughjs';

const generator = rough.generator();

function createElement(x1, y1, x2, y2, type) {
    switch (type) {
        case 'line':
            {
                return createLine(x1, y1, x2, y2);
            }
        case 'rect':
            {
                return createRect(x1, y1, x2-x1, y2-y1);
            }
        case 'circle':
            {
                return createCircle(x1, y1, x2 - x1, y2 - y1);
            }
    }

    //line
    //const roughElement = generator.line(x1, y1, x2, y2);
    //rect
    //const roughElement = generator.line(x1, y1, x2-x1, y2-y1);
    //return { x1, y1, x2, y2, roughElement };
}
function createLine(x1, y1, x2, y2) {
    const roughElement = generator.line(x1, y1, x2, y2);
    return { x1, y1, x2, y2, roughElement };
}
function createRect(x1, y1, x2, y2) {
    const roughElement = generator.rectangle(x1, y1, x2, y2);
    return { x1, y1, x2, y2, roughElement };
}
function createCircle(x1, y1, x2, y2) {
    const roughElement = generator.circle(x1, y1, x2, y2);
    return { x1, y1, x2, y2, roughElement };
}

function Canvas() {

    const [elements, setElements] = useState([]);
    const [drawing, setDrawing] = useState(false);
	const [elementType, setElementType] = useState('line');

    useLayoutEffect(() => {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        const roughCanvas = rough.canvas(canvas);

        //initial learning
        //const rect = generator.rectangle(10, 10, 150, 150);
        //const line = generator.line(10, 10, 150, 150)
        //roughCanvas.draw(rect);
        //roughCanvas.draw(line);

        elements.forEach(({ roughElement }) => {
            roughCanvas.draw(roughElement)
        })
    }, [elements]);

    const handleMouseDown = (event) => {
        setDrawing(true);

        const { clientX, clientY } = event;
        const element = createElement(clientX, clientY, clientX, clientY, elementType);
        setElements(prevState => [...prevState, element]);
    };

    const handleMouseMove = (event) => {
        if (!drawing) return;

        const { clientX, clientY } = event;
        const index = elements.length - 1;
        const { x1, y1 } = elements[index];
        const updatedElement = createElement(x1, y1, clientX, clientY, elementType);

        const elementsCopy = [...elements];
        elementsCopy[index] = updatedElement;
        setElements(elementsCopy);

    };

    const handleMouseUp = () => {
        setDrawing(false);
    };

    return (
        <div>
            <div style={{ position: 'fixed' }}>
                <Button variant='outlined' onClick={() => setElementType('line')}>Line</Button>
                <Button variant='outlined' onClick={() => setElementType('rect')}>Rectangle</Button>
                <Button variant='outlined' onClick={() => setElementType('circle')}>Circle</Button>
                <Button variant='outlined' onClick={() => setElements([])}>Clear All</Button>
                <Button variant='outlined' onClick={() => setElements(prevItems => prevItems.slice(0, -1))}>Undo</Button>
                <NavLink to={'/'}>
                    <Button color='warning' onClick={() => setElements([])}>Go Back Home</Button>
                </NavLink>
            </div>
            <canvas
                id='canvas'
                width={window.innerWidth}
                height={window.innerHeight}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                Canvas
            </canvas>
        </div>
        
  );
}

export default Canvas;