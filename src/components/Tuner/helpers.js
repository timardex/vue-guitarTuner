export const loopIntoObject = (selected, selectedString = '', items, tune) => {
    if(selected === selectedString) {
        tune.map(value => {
             items.push({
                 id: value.id,
                 name: value.name,
                 isPlaying: value.isPlaying,
                 string: value.string,
                 string_animated: value.string_animated,
                 clicked: value.clicked
             })
        });
    }
}