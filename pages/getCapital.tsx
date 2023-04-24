import client from '@/apollo-client'
import { gql } from '@apollo/client'
import styles from "@/styles/Home.module.css"

type CountryType={
  name:string
  capital:string 
  
}

type ContinentDeaitls={
   name:string 
   countries:CountryType[]
}

type Continents={
  continents:ContinentDeaitls[]
}

 






const  getCapital=({continents}:Continents) =>{

  return (

    <section  className='grid grid-cols-4 gap-2 '>
      {continents.map((continent:any)=>(
        <>
          <section className={styles.card}>
          <h1 className='text-2xl'> Continent:{continent.name}</h1>
        {continent.countries.slice(0,5).map((country:any)=>(
          <>
          <section className='border-2 border-blue-500 m-2 '>
          <p> Country Name: {country.name}</p>
          <p> Captial :{country.capital}</p>
          </section>
          
          </>
         
        ))}
          </section>
         
        </>
       
      ))}
      


    </section>
  
  )
}

export default getCapital


export async function getServerSideProps(){
const {data}= await client.query({
    query:gql`
    query  {
        continents {
          name
          countries {
            name
            capital
            
            
           
     
          }
            
          
        }
     }`
})
return {
  props:{
    continents:data.continents
  }
}
} 