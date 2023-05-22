import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import './index.css';
import { useNavigate } from 'react-router-dom';

interface Continent {
    code: string;
    name: string;
}

function ContinentsComponent() {
    const navigate = useNavigate();
    const [continents, setContinents] = useState<Continent[]>([]);

    useEffect(() => {
        const client = new ApolloClient({
            uri: 'https://countries.nausicaa.wilders.dev/',
            cache: new InMemoryCache(),
        });

        client
            .query({
                query: gql`
                    query Query {
                        continents {
                            code
                            name
                        }
                    }
                `,
            })
            .then((result) => {
                const continentData = result.data.continents.map((continent: Continent) => continent);
                setContinents(continentData);
            });
    }, []);


    console.log("continents =>", continents)
    return (
        <div className="App">
            <h1>Continents</h1>
            <ul className="continents-list">
                {continents.map((continent) => (
                    <li key={continent.code} onClick={() => navigate(`/countries/${continent.code}`)}>{continent.name} </li>
                ))}
            </ul>
        </div>
    );
}

export default ContinentsComponent;