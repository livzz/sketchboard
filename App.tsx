import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AwesomeHierarchyGraph from 'react-native-d3-tree-graph'

import Draw from './lib/drawing'

export default function App() {
  var root = {
    name: "1",
    id: 1,
    hidden: true,
    children: [{
      name: "16",
      id: 16,
      no_parent: true,
      nodeTextStyle: { fontSize: 12 }
    },
    {
      name: "2",
      id: 2,
      no_parent: true,
      hidden: true,
      children: [{
        name: "12",
        id: 12,

        nodeImageStyle: { imageHeight: 60, imageWidth: 60, opacity: 1 },
        nodeTextStyle: { fontSize: 12 }
      }, {
        name: "13",
        id: 13,
        no_parent: true,

        nodeImageStyle: { imageHeight: 60, imageWidth: 60, opacity: 1 },
        nodeTextStyle: { fontSize: 12 }
      }, {
        name: "3",
        id: 3,

        nodeImageStyle: { imageHeight: 60, imageWidth: 60, opacity: 1 },
        nodeTextStyle: { fontSize: 12 }
      }, {
        name: "4",
        id: 4,
        hidden: true,
        no_parent: true,
        children: [{
          name: "5",
          id: 5,

          nodeImageStyle: { imageHeight: 60, imageWidth: 60, opacity: 1 },
          nodeTextStyle: { fontSize: 12 }
        }, {
          name: "14",
          id: 14,
          hidden: true,
          no_parent: true,
          children: [{
            name: "15",
            id: 15,

            nodeImageStyle: { imageHeight: 60, imageWidth: 60, opacity: 1 },
            nodeTextStyle: { fontSize: 12 }
          }]
        }, {
          name: "6",
          id: 6,

          nodeImageStyle: { imageHeight: 60, imageWidth: 60, opacity: 1 },
          nodeTextStyle: { fontSize: 12 }
        }]
      }, {
        name: "11",
        id: 11,

        nodeImageStyle: { imageHeight: 60, imageWidth: 60, opacity: 1 },
        nodeTextStyle: { fontSize: 12 }
      }, {
        name: "7",
        id: 7,

        nodeImageStyle: { imageHeight: 60, imageWidth: 60, opacity: 1 },
        nodeTextStyle: { fontSize: 12 },
        children: [{
          name: "8",
          id: 8,

          nodeImageStyle: { imageHeight: 60, imageWidth: 60, opacity: 1 },
          nodeTextStyle: { fontSize: 12 }
        }, {
          name: "9",
          id: 9,

          nodeImageStyle: { imageHeight: 60, imageWidth: 60, opacity: 1 },
          nodeTextStyle: { fontSize: 12 }
        }]
      }]
    }, {
      name: "10",
      id: 10,
      no_parent: true,
      nodeImageStyle: { imageHeight: 60, imageWidth: 60, opacity: 1 },
      nodeTextStyle: { fontSize: 12 },
      children: [

      ]
    },
    {
      name: "anoop",
      id: 155,
      no_parent: true,
      children: [{
        name: "H",
        id: 8,
      }, {
        name: "I",
        id: 9,
      },
      {
        name: "I",
        id: 9,
      },
      {
        name: "I",
        id: 9,
      },
      {
        name: "I",
        id: 9,
      },

      ]
    },
    {
      name: "16",
      id: 16,
      no_parent: true
    }

    ]
  }




  var siblings = [{
    source: {
      id: 3,
      name: "C"
    },
    target: {
      id: 11,
      name: "K"
    }
  }, {
    source: {
      id: 12,
      name: "L"
    },
    target: {
      id: 13,
      name: "J"
    }
  }, {
    source: {
      id: 5,
      name: "D"
    },
    target: {
      id: 6,
      name: "E"
    }
  }, {
    source: {
      id: 16,
      name: "Q"
    },
    target: {
      id: 10,
      name: "M"
    }
  }];
  return (
    // <View style={styles.container}>
    //   {/* <Text>Open up App.tsx to start working on your app!</Text> */}
    //   <StatusBar style="auto" />
    //   <AwesomeHierarchyGraph
    //     root={root}
    //     siblings={siblings}
    //   />
    // </View>
    <Draw />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
