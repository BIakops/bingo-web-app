import React from 'react'

export default class Bingo extends React.Component {
    
    bingoGrid(){ /// grid of buttons for the bingo deck
        return <div className = "grid-cols-9">
                <btn className = "bg-blue-200 hover:bg-blue-600">1</btn>
                
                <p className='bg-green-400 px-3 py-2 text-ellipsis '>hello this sentence should appear alittle big</p>
            </div>
    }
    render(){
        return( <div>
            <h1 >Bingo</h1>
            <this.bingoGrid/>
        </div>);
    }
}