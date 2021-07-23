import React, { Component } from 'react'
import { BoxProduto } from './Ecommerce.styleProdutos'
import  EcommerceCard from './EcommerceCard'

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



export default class EcommerceProdutos extends Component {

    state = {
        
        valorMinimo: "",
        valorMaximo: "",
        filtroNome: "",
        mostraCarrinho: false,
        produtos: [{ 
                      
            id: Date.now (),
            nome: 'Camiseta Labalienave',
            valor: 45.0,
            quantidade : 0,
            imagem: Labalienave
            },
            {
            
            id: Date.now (),
            nome: 'Camiseta Labaliencoke',
            valor: 45.0,
            quantidade : 0,
            imagem: Labaliencoke
    
            },
    
            {
            
            id: Date.now (),
            nome: 'Camiseta Labalienhype',
            valor: 45.0,
            quantidade : 0,
            imagem: Labalienhype
    
            },
    
            {
            
            id: Date.now (),
            nome: 'Camiseta Labaturno',
            valor: 45.0,
            quantidade : 0,
            imagem: Labaturno
    
            },
    
            {
                
            id: Date.now (),
            nome: 'Camiseta Labduza',
            valor: 55.0,
            quantidade : 0,
            imagem: Labduza
    
            },
    
            {
            
            id: Date.now (),
            nome: 'Camiseta Labeteoro',
            valor: 55.0,
            quantidade : 0,
            imagem: labeteoro
    
            },
    
            {
            
            id: Date.now (),
            nome: 'Camiseta Labistemasolar',
            valor: 65.0,
            quantidade : 0,
            imagem: Labistemasolar
    
            },
    
            {
            
            id: Date.now (),
            nome: 'Camiseta Lablactea',
            valor: 65.0,
            quantidade : 0,
            imagem: Lablactea
    
            },
    

            {
            
            id: Date.now (),
            nome: 'Camiseta Labnasa',
            valor: 75.0,
            quantidade : 0,
            imagem: Labnasa
    
            },
            
            {
                
            id: Date.now (),
            nome: 'Camiseta Labnasa',
            valor: 75.0,
            quantidade : 0,
            imagem: Labnave
    
            },

            {
                
            id: Date.now (),
            nome: 'Camiseta Labplanets',
            valor: 75.0,
            quantidade : 0,
            imagem: Labplanets
    
            },

            {
                
            id: Date.now (),
            nome: 'Camiseta Labtrioalien',
            valor: 35.0,
            quantidade : 0,
            imagem: Labtrioalien
    
            },
        
            {
                
            id: Date.now (),
            nome: 'Camiseta Pacplanets',
            valor: 55.0,
            quantidade : 0,
            imagem: pacplanets
    
            }]
        }
        

        componentDidUpdate(){
            localStorage.setItem('carrinho', JSON.stringify(this.state.produtos))
          }


    render() {

        const listaDeProdutos = this.state.produtos.map((produto,index) =>{
            return (
                <EcommerceCard key={index}
                         imagem={produto.imagem}
                         name={produto.nome}
                         value= {produto.valor}        
               />
            )

        })


        return (
            <BoxProduto>             
                {listaDeProdutos}  
            </BoxProduto>
        )
    }
}
