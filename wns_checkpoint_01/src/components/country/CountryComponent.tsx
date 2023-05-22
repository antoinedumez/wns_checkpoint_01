import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import './index.css';
import {useParams } from 'react-router-dom';
interface CountryInformations {
    name: string;
    currency: string;
    capital: string;
    emoji: string;
}

function CountryComponent() {
    const { code } = useParams<{ code: string }>();
    const [countryInformations, setCountryInformations] = useState<CountryInformations | null>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const client = new ApolloClient({
            uri: 'https://countries.nausicaa.wilders.dev/',
            cache: new InMemoryCache(),
        });

        client
            .query({
                query: gql`
          query Query {
            country(code: "${code?.toUpperCase()}") {
              name
              currency
              capital
              emoji
            }
          }
        `,
            })
            .then((result) => {
                const countryData = result.data.country;
                setCountryInformations(countryData);
                console.log("countryData =>", countryData);
            });
    }, []);

    if (!countryInformations) {
        return <div>Loading...</div>;
    }

    const { name, currency, capital, emoji } = countryInformations;

    return (
        <div className="container">
            <div className="card">
                <h1>{name} {emoji}</h1>
                <h2>currency : {currency}</h2>
                <h2>capital : {capital}</h2>
            </div>
        </div>
    );
}

export default CountryComponent;
