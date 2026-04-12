import DataSource from "./dataSource.js";

try {

    const ds = new DataSource('db/database.json');

    //  ds.create({
    //      author: "Александр Пушкин",
    //      title: "Евгений Онегин",
    //      description: "Роман в стихах о жизни молодого дворянина, который отвергает любовь искренней девушки, а затем, осознав ошибку, теряет ее навсегда. Энциклопедия русской жизни XIX века."
    //  });

    // ds.delete(8);

    const all = ds.getAll();
    console.log('ALL:', all);

    // const oneBrfore = ds.getOne(1);
    // console.log('ONE BEFORE:', oneBrfore);

    // ds.update(1, {description: 'Роман в стихах Онегин Евгений'});

    // const oneAfter = ds.getOne(1);
    // console.log('ONE AFTER:', oneAfter);

} catch (e) {
    console.error('Error detected:', e);
}