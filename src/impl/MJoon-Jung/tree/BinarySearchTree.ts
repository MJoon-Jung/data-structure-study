import { IBinarySearchTree } from '@/src/impl/MJoon-Jung/tree/IBinarySearchTree';
import { Node } from '@/src/impl/MJoon-Jung/tree/Node';

export class BinarySearchTree implements IBinarySearchTree {
  insert(node: Node): void {}
  search(value: number): Node {}
  delete(): void {}
  inOrderTraversal(): Node[] {}
  preOrderTraversal(): Node[] {}
  levelOrderTraversal(): Node[] {}
}
