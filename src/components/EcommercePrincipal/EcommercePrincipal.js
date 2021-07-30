import React, { Component } from 'react'
import Filtros from "../EcommerceFiltros/EcommerceFiltros"
import Produtos from "../EcommerceProdutos/EcommerceProdutos"
import Carrinho from "../EcommerceCarrinho/EcommerceCarrinho"
import { BoxPrincipal } from './Ecommerce.stylePrincipal'
//imports images
import Labalienave from './../../img/camiseta-Labalienave.jpg'
import Labaliencoke from './../../img/camiseta-Labaliencoke.jpg'
import Labalienhype from './../../img/camiseta-Labalienhype.jpg'
import Labaturno from './../../img/camiseta-Labaturno.jpg'
import Labduza from './../../img/camiseta-Labduza.jpg'
import labeteoro from './../../img/camiseta-labeteoro.jpg'
import Labistemasolar from './../../img/camiseta-Labistemasolar.jpg'
import Lablactea from './../../img/camiseta-Lablactea.jpg'
import Labnasa from './../../img/camiseta-Labnasa.jpg'
import Labnave from './../../img/camiseta-Labnave.jpg'
import Labtrioalien from './../../img/camiseta-Labtrioalien.jpg'
import pacplanets from './../../img/camiseta-pacplanets.jpg'
import Labplanets from './../../img/Camiseta-Labplanets.jpg'

const products = [{ 
                      
    id: 1,
    nome: 'Camiseta Labalienave',
    valor: 45,
    imagem: Labalienave
    },
    {
    
    id: 2,
    nome: 'Camiseta Labaliencoke',
    valor: 45,
    imagem: Labaliencoke

    },

    {
    
    id: 3,
    nome: 'Camiseta Labalienhype',
    valor: 45,
    imagem: Labalienhype

    },

    {
    
    id: 4,
    nome: 'Camiseta Labaturno',
    valor: 45,
    imagem: Labaturno

    },

    {
        
    id: 5,
    nome: 'Camiseta Labduza',
    valor: 55,
    imagem: Labduza

    },

    {
    
    id: 6,
    nome: 'Camiseta Labeteoro',
    valor: 55,
    imagem: labeteoro

    },

    {
    
    id: 7,
    nome: 'Camiseta Labistemasolar',
    valor: 65,
    imagem: Labistemasolar

    },

    {
    
    id: 8,
    nome: 'Camiseta Lablactea',
    valor: 65,
    imagem: Lablactea

    },


    {
    
    id: 9,
    nome: 'Camiseta Labnasa',
    valor: 75,
    imagem: Labnasa

    },
    
    {
        
    id: 10,
    nome: 'Camiseta Labnasa',
    valor: 75,
    imagem: Labnave

    },

    {
        
    id: 11,
    nome: 'Camiseta Labplanets',
    valor: 75,
    imagem: Labplanets

    },

    {
        
    id: 12,
    nome: 'Camiseta Labtrioalien',
    valor: 35,
    imagem: Labtrioalien

    },

    {
        
    id: 13,
    nome: 'Camiseta Pacplanets',
    valor: 55,
    imagem: pacplanets

    }]



export default class EcommercePrincipal extends Component {
     
    state = {
        minFilter: 0,
        maxFilter: 0,
        nameFilter: 'Camiseta',
        productsInCart : [{ 
                      
            id: 1,
            nome: 'Camiseta Labalienave',
            valor: 45,
            imagem: Labalienave,
            quantity: 1
            },
            {            
            id: 2,
            nome: 'Camiseta Labaliencoke',
            valor: 45,
            imagem: Labaliencoke,
            quantity: 2   

            },
        
            {            
            id: 3,
            nome: 'Camiseta Labalienhype',
            valor: 45,
            imagem: Labalienhype,
            quantity: 3        
            }
        ]
    
    }
    
    onChangeMinFilter = (event) => {
        this.setState({minFilter: event.target.value})
    }
    
    onChangeMaxFilter = (event) => {
        this.setState({maxFilter: event.target.value})
    }
    
    onChangeNameFilter = (event) => {
        this.setState({nameFilter: event.target.value})
    }

    
    onAddProductToCart = (productId) => {

        console.log("entro al boton")
        const productInCart = this.state.productsInCart.find(product => productId === product.id)
    
        if(productInCart) {
          const newProductsInCart = this.state.productsInCart.map(product => {
            if(productId === product.id) {
              return {
                ...product,
                quantity: product.quantity + 1
              }
            }
    
            return product
          })
    
          this.setState({productsInCart: newProductsInCart})
        } else {
          const productToAdd = products.find(product => productId === product.id)
    
          const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]
    
          this.setState({productsInCart: newProductsInCart})
        }
      }

     onRemoveProductFromCart = (productId) => {
        const newProductsInCart = this.state.productsInCart.map((product) => {
          if(product.id === productId) {
            return {
              ...product,
              quantity: product.quantity - 1
            }
          }
          return product
        }).filter((product) => product.quantity > 0)
    
        this.setState({productsInCart: newProductsInCart})
      }  


    render() {
        return (
            <BoxPrincipal>
                <Filtros
                 minFilter={this.state.minFilter}
                 maxFilter={this.state.maxFilter}
                 nameFilter={this.state.nameFilter}
                 onChangeMinFilter={this.onChangeMinFilter}            
                 onChangeMaxFilter={this.onChangeMaxFilter}            
                 onChangeNameFilter={this.onChangeNameFilter}                  
                />
                <Produtos
                products = {products}
                minFilter={this.state.minFilter}
                maxFilter={this.state.maxFilter}
                nameFilter={this.state.nameFilter} 
                onAddProductToCart={this.onAddProductToCart}               
                />
                <Carrinho
                  productsInCart={this.state.productsInCart}
                  onRemoveProductFromCart={this.onRemoveProductFromCart}
                
                />                 
            </BoxPrincipal>
        )
    }
}
