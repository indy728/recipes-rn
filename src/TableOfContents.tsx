import React from 'react';
import { TouchableOpacity, FlatList, View, ListRenderItem } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  last: string,
}

interface Datum { id: string, label: string, to: string }

const DATA: Datum[] = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    to: 'CHAPTER BREAKFAST',
  },
  {
    id: 'lunch',
    label: 'Lunch',
    to: 'CHAPTER LUNCH',
  },
  {
    id: 'dinner',
    label: 'Dinner',
    to: 'CHAPTER DINNER',
  },
  {
    id: 'index',
    label: 'Index',
    to: 'INDEX',
  },
]

const TableOfContents: React.FC<Props> = ({ last }) => {
  const renderItem: ListRenderItem<Datum> = ({ item }: { item: Datum }) => (
    <View>
      <TouchableOpacity>
        <Text>
          {item.label}
        </Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item: Datum) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

export default TableOfContents;