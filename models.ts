type CountryType={
    name:string
    capital:string 
    
  }
  
  type ContinentDeaitls={
     name:string 
     countries:CountryType[]
  }
  
  export type Continents={
    continents:ContinentDeaitls[]
  }

   type CountryDetailsObjectType={
    code:string
    name:string
    emoji:string

    
}
export type CountriesType={
    countries:CountryDetailsObjectType[]
}