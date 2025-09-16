import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'; 

const emojiColors = {
  '🔥': '#F08030',
  '🌿': '#78C850',
  '💧': '#6890F0',
  '⚡': '#F8D030',
  '👻': '#705898',
  '☠️': '#A040A0',
  '🪨': '#B8A038',
  '🌍': '#E0C068',
  '🐉': '#7038F8',
};

const parseTypes = (typeString) => {
  if (!typeString) return [];
  return typeString.split('/').map((t) => t.trim());
};

const PokemonCard = ({ name, hp, type, moves, weaknesses, image }) => {
  const types = parseTypes(type);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️HP: {hp}</Text>
      </View>

      <Image source={image} style={styles.image} />

      {/* Type section */}
      <View style={styles.typeRow}>
        {types.map((entry, index) => {
          const emoji = entry.match(/[\u{1F300}-\u{1FAFF}]/gu)?.[0] || '';
          const label = entry.replace(emoji, '').trim();
          const color = emojiColors[emoji] || '#000';

          return (
            <View key={index} style={[styles.typeContainer, { borderColor: color }]}>
              <Text style={styles.typeText}>
                <Text style={{ color }}>{emoji}</Text> {label}
              </Text>
            </View>
          );
        })}
      </View>

      {/* Moves */}
      <Text style={styles.label}>Moves: <Text style={styles.value}>{moves.join(', ')}</Text></Text>

      {/* Weaknesses */}
      <Text style={styles.label}>Weakness: <Text style={styles.value}>{weaknesses.join(', ')}</Text></Text>
    </View>
  );
};

PokemonCard.defaultProps = {
  name: 'Unknown',
  hp: 0,
  type: '',
  moves: [],
  weaknesses: [],
  image: null,
};

const styles = StyleSheet.create({
  card: {
    width: 320,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  hp: {
    fontSize: 18,
    color: '#000',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 12,
  },
  typeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  typeContainer: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  typeText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    marginTop: 6,
    alignSelf: 'flex-start',
  },
  value: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default PokemonCard;
