import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import PokemonCard from './PokemonCard';

// Import local images (must be in your assets folder)
import charmanderImg from './assets/charmander.jpg';
import bulbasaurImg from './assets/bulbasaur.jpg';
import squirtleImg from './assets/squirtle.jpg';
import pikachuImg from './assets/pikachu.jpg';
import gastlyImg from './assets/gastly.jpg';
import onixImg from './assets/onix.jpg';
import dratiniImg from './assets/dratini.jpg';

export default function App() {
  const pokemonData = [
    {
      name: 'Charmander',
      hp: 39,
      type: 'Fire 🔥',
      moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
      weaknesses: ['Water', 'Rock', 'Ground'],
      image: charmanderImg,
    },
    {
      name: 'Bulbasaur',
      hp: 45,
      type: 'Grass 🌿 / Poison ☠️',
      moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
      weaknesses: ['Fire', 'Flying', 'Ice', 'Psychic'],
      image: bulbasaurImg,
    },
    {
      name: 'Squirtle',
      hp: 44,
      type: 'Water 💧',
      moves: ['Tackle', 'Water Gun', 'Withdraw', 'Bubble'],
      weaknesses: ['Electric', 'Grass'],
      image: squirtleImg,
    },
    {
      name: 'Pikachu',
      hp: 35,
      type: 'Electric ⚡',
      moves: ['Thunder Shock', 'Quick Attack', 'Growl', 'Electro Ball'],
      weaknesses: ['Ground'],
      image: pikachuImg,
    },
    {
      name: 'Gastly',
      hp: 30,
      type: 'Ghost 👻 / Poison ☠️',
      moves: ['Lick', 'Hypnosis', 'Night Shade', 'Confuse Ray'],
      weaknesses: ['Ghost', 'Psychic', 'Dark'],
      image: gastlyImg,
    },
    {
      name: 'Onix',
      hp: 35,
      type: 'Rock 🪨 / Ground 🌍',
      moves: ['Tackle', 'Rock Throw', 'Harden', 'Bind'],
      weaknesses: ['Water', 'Grass', 'Ice', 'Fighting', 'Steel'],
      image: onixImg,
    },
    {
      name: 'Dratini',
      hp: 41,
      type: 'Dragon 🐉',
      moves: ['Wrap', 'Leer', 'Thunder Wave', 'Twister'],
      weaknesses: ['Ice', 'Dragon', 'Fairy'],
      image: dratiniImg,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.cardList}>
        {pokemonData.map((pokemon, index) => (
          <PokemonCard key={index} {...pokemon} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardList: {
    padding: 16,
    alignItems: 'center',
  },
});
