/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.root = Object.create(null);
  }

  insert(word) {
    let node = this.root;
    for (const c of word) {
      if (!node[c]) node[c] = Object.create(null);
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (const c of word) {
      node = node[c];
      if (!node) return null;
    }
    return node;
  }

  search(word) {
    console.log(JSON.stringify(this.root));
    let node = this.traverse(word);
    return !!node && !!node.isWord;
  }

  startsWith(prefix) {
    return !!this.traverse(prefix);
  }
}

const newTrie = new Trie();
newTrie.insert("apple");
newTrie.search("apple");
newTrie.insert("app");
newTrie.search("app");
newTrie.insert("banana");
newTrie.search("banana");
