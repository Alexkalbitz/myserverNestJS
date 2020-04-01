import { jwtConstants } from "../modules/auth/constants";


export function idFromJwt(auth: string) {
    const token = auth.split(' ')[1]
    const jwt = require('jsonwebtoken') 
    const decoded = jwt.verify(token, jwtConstants.secret);
    
    return decoded.id
}


export function groupBy<K, V>(array: V[], fn: (item: V) => K): Map<K, V[]> {
    const map: Map<K, V[]> = new Map();
    array.forEach((i) => {
        const key = fn(i);
        let itemArray = map.get(key);
        if (itemArray === undefined) {
            itemArray = [];
            map.set(key, itemArray);
        }
        itemArray.push(i);
    });
    return map;
}


// async function getListsWithItems(userId: string) : Promise<List[]> {
// 	// Eager from list -> item should be disabled!
// 	const lists = await listRepository.find({ where: { userId } });
// 	if(lists.length < 1){
// 		return [];
// 	}
	
// 	// Get all items for all these lists, and group them by the listId (@RelationId)
// 	const listIds = lists.map((list) => list.id);
// 	const itemsByListId : Map<string, Item> = groupBy(
// 		await itemRepo.find({ where: { list: In(listIds) } }),
// 		(item) => item.listId
// 	)
	
// 	// Add items to their respective lists
// 	lists.forEach((list) => {
// 		list.items = itemsByListId.get(list.id);
// 	});
	
// 	return lists;


