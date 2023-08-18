export default async function ServerComponentTest() {
    return (<>
        <div>Je suis un composant de type server</div>
        <p>et je vais être passé à un composant de type client</p>
        <p>mais en tant que children, autrement cela ne pourrait pas fonctionner <b>si le <u>server component</u> est défini en tant que <u>fonction asynchrone</u>.</b></p>
    </>)
}
