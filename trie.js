class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;

    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i];
      if (!(charToInsert in curr.children)) {
        curr.children[charToInsert] = new Node();
      }
      curr = curr.children[charToInsert];
    }

    curr.isWordEnd = true;
  }

  contains(word) {
    let curr = this.root;

    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!(charToFind in curr.children)) {
        return false;
      }
      curr = curr.children[charToFind];
    }

    return curr.isWordEnd;
  }

  startWithPrefix(prefix) {
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let charToFind = prefix[i];
      if (!(charToFind in curr.children)) {
        return false;
      }
      curr = curr.children[charToFind];
    }

    return true;
  }

  printWord(curr = this.root, word = "", result = []) {
    if (curr.isWordEnd && Object.entries(curr.children).length === 0) {
      return result.push(word);
    } else if (curr.isWordEnd) {
      result.push(word);
    }

    for (let c in curr.children) {
      this.printWord(curr.children[c], word + c, result);
    }

    return result;
  }
}

let trie = new Trie();

trie.insert("Pranav");
trie.insert("Sannoj");
trie.insert("Akhil");
trie.insert("Liston");
console.log(trie.root);
console.log(trie.contains("Pranav"));
console.log(trie.printWord());
