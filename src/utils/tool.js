/**
 * constrcut 方法
 * 根据提供的 id, pid 和 children 将一个个节点构建成一棵或者多棵树
 * @param nodes 节点对象
 * @param config 配置对象
 */
function construct (nodes, config) {
  var id = (config && config.id) || 'id'
  var pid = (config && config.pid) || 'pid'
  var children = (config && config.children) || 'children'
  var idMap = {}
  var jsonTree = []
  nodes.forEach(function (v) { idMap[v[id]] = v })
  nodes.forEach(function (v) {
    var parent = idMap[v[pid]]
    if (parent) {
      !parent[children] && (parent[children] = [])
      parent[children].push(v)
    } else {
      jsonTree.push(v)
    }
  })
  return jsonTree
}
let tool = {
  construct
}
export default tool
