import gql from 'graphql-tag'
import { useGQLQuery } from './useGQLQuery'

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`

const GET_COUNTRY = gql`
  query($code: ID!) {
    country(code: $code) {
      name
    }
  }
`

const App = () => {
  //  Fetch data from custom hook using react-query
  const { data, isLoading, error } = useGQLQuery('countries', GET_COUNTRY, {
    code: 'BY'
  })

  console.log(data)

  if (isLoading) return <div>Loading ...</div>
  if (error) return <div>Error! Something went wrong ...</div>

  return (
    <div>
      Country: {data.country.name}
      {/* {data.countries.map(country => (
        <div key={country.name}>{country.name}</div>
      ))} */}
    </div>
  )
}

export default App
