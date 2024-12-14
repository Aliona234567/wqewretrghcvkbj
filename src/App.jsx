import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Items from './Components/Items';
import Categoris from './Components/Categoris';
import ShowFullItem from './Components/ShowFullItem';

class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      orders:[],
      currentItems:[],
      items: [ 
        {
          id:1,
          title: 'Шоколадное безумие',
          img:'первое.jpg',
          desc:'с орешками',
          category:'assorted',
          price:'200'
        },
        {
          id:2,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          category:'milky',
          price:'Цена:200$'
        },
        {
          id:3,
          title: 'Шоколадное безумие',
          img:'третье.jpg',
          desc:'с орешками',
          category:'milky',
          price:'Цена:200$'
        },
        {
          id:4,
          title: 'Шоколадное безумие',
          img:'четвертое.jpg',
          desc:'с орешками',
          category:'assorted',
          price:'Цена:200$'
        },{
          id:5,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          category:'candies',
          price:'Цена:200$'
        },
        {
          id:6,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          category:'milky',
          price:'Цена:200$'
        },
        {
          id:7,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          category:'milky',
          price:'Цена:200$'
        },
        {
          id:8,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          category:'milky',
          price:'Цена:200$'
        },
        {
          id:9,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          category:'assorted',
          price:'Цена:200$'
        },{
          id:10,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          category:'dragees',
          price:'Цена:200$'
        }
        ,{
          id:11,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          category:'candies',
          price:'Цена:200$'
        }
        ,{
          id:12,
          title: 'Шоколадное безумие',
          img:'второе.jpg',
          desc:'с орешками',
          category:'dragees',
          price:'Цена:200$'
        }
        
      ],
      ShowFullItem:false,
      fullItem:{},
    };
    this.state.currentItems =this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);



  }

  render() {
    return (
      <div className='wraper'> 
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categoris chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder}  onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }
  onShowItem(item){
    this.setState({fullItem:item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category ==='all'){
      this.setState({currentItems:this.state.items})
      return
    }
this.setState({
  currentItems: this.state.items.filter(el => el.category === category)
})    
  }
  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  addToOrder(item) {
    if (!this.state.orders.find(el => el.id === item.id)) {
      this.setState(prevState => ({ orders: [...prevState.orders, item] })); 
    }
  
}
}
export default App; 