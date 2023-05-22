import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import './index.css';
import { useParams, useNavigate } from 'react-router-dom';

interface Country {
    name: string;
    emoji: string;
    code: string;
}

function CountriesComponent() {
    const { name, code } = useParams<{ name: string, code: string }>();
    const navigate = useNavigate();
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const client = new ApolloClient({
            uri: 'https://countries.nausicaa.wilders.dev/',
            cache: new InMemoryCache(),
        });
        client
            .query({
                query: gql`
                    query Query {
                        continent(code: "${code?.toUpperCase()}") {
                            countries {
                                name
                                emoji
                                code
                            }
                        }
                    }
                `,
            })
            .then((result) => {
                const countriesDatas = result.data.continent.countries.map((country: Country) => country);
                setCountries(countriesDatas);
                console.log("countries =>", countriesDatas)
            });
    });

    return (
        <div className="App">
            <h1>{name}</h1>
            <ul className="continents-list">
                {countries.map((country) => (
                    <li key={country.code} onClick={() => navigate(`/country/${country.code}`)}>{country.name} {country.emoji} </li>
                ))}
            </ul>
        </div>
    )
}

export default CountriesComponent