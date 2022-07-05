import { NodeExam } from '@/src/data-structure/tree/NodeExam';

export interface IBinarySearchTreeExam {
  insert(node: NodeExam): void; // 노드 삽입
  search(value: number): NodeExam; // 트리에서 값 탐색
  delete(): void;
  inOrderTraversal(): NodeExam[];
  preOrderTraversal(): NodeExam[];
  levelOrderTraversal(): NodeExam[];
}
