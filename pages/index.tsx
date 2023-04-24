import {gql} from "@apollo/client"
import client from "@/apollo-client"
import styles from "@/styles/Home.module.css";
import { CountriesType } from "@/models";





const  Home=({countries}:CountriesType)=> {
  return (
   
    <div className={styles.grid}>
      {countries.map((country:any)=>(
       <section key={country.code} className={styles.card}>
        <h3>{country.name}</h3>
        <p>{country.code} - {country.emoji}</p>

       </section>
      ))}

    </div>
  )
}


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query  {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
 };
}
export default Home

