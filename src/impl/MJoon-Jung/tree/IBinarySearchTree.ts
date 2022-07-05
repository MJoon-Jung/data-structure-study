import { Node } from '@/src/impl/MJoon-Jung/tree/Node';

export interface IBinarySearchTree {
  insert(node: Node): void; // 노드 삽입
  search(value: number): Node; // 트리에서 값 탐색
  delete(): void;
  inOrderTraversal(): Node[];
  preOrderTraversal(): Node[];
  levelOrderTraversal(): Node[];
}
