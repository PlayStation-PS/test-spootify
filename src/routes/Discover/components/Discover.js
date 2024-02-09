import React, { useState, useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

const Discover = () => {
  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);

  const getNewReleases = async () => {
    const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd110648a8dmsh875cbfe8148e151p15f73bjsna485287ab5a3',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const result = await response.json();
        // console.log(result.tracks)
        setNewReleases(result?.tracks || [])
      } else {
        console.error('Failed to fetch tracks. Status:', response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const getPlaylists = async () => {
    const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd110648a8dmsh875cbfe8148e151p15f73bjsna485287ab5a3',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const result = await response.json();
        // console.log(result.tracks)
        setPlaylists(result?.tracks || [])
      } else {
        console.error('Failed to fetch playlist. Status:', response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const getCategories = async () => {
    const url = 'https://spotify23.p.rapidapi.com/genre_view/?id=0JQ5DAqbMKFEC4WFtoNRpw&content_limit=10&limit=20';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd110648a8dmsh875cbfe8148e151p15f73bjsna485287ab5a3',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const result = await response.json();
        // console.log(result.content.items)
        setCategories(result.content?.items || [])
      } else {
        console.error('Failed to fetch playlist. Status:', response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNewReleases()
    getPlaylists()
    getCategories()
  }, []);

  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
    </div>
  );
};

export default Discover;
