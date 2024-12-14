import React, { Component } from 'react'

export class Categoris extends Component {
    constructor(props){
        super(props)
        this.state ={
            categoris:[
                {
                    key: 'all',
                    name:'Все',
                },
                {
                    key: 'milky',
                    name:'Шоколад молочный ',
                },
                {
                    key: 'assorted',
                    name:'Шоколад асарти',
                },
                {
                    key: 'dragees',
                    name:'Драже',
                },
                {
                    key: 'candies',
                    name:'Канфеты',
                }
            ]
        }
    }
  render() {
    return (
      <div className='categoris'>
        {this.state.categoris.map(el =>(
            <div key={el.key} onClick={() =>this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categoris
