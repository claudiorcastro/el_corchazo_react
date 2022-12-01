import logo from './logo.svg';
import './App.css';
import Carrusel from './Components/Carrusel/Carrusel';
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Card/Card';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div >
      <Carrusel/>
      <Navbar/>
      <ItemListContainer texto='¡Bienvenidos a Vineria El Corchazo!'/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      <div className='d-flex'>  
        <Card
          titulo={"Fernet"}
          descripcion={"lorem"}
          img={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIRBhUSExMWFhUWFBcbGBYVFhUVGBcWFRkWFhcaGRYaHSggGhslHRUXITElJysrLy4uGSAzODMsNyktLysBCgoKDg0OGxAQGjAmHiUtNy0uLS0tLSsuKy8tLS41NS0tLy01NS01LSstNy8tNS0tLS0tNTctLS0tLTA3LS01Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgDAQL/xABLEAACAQIEAgYFBQoMBwAAAAAAAQIDEQQSITEFBgcTIkFRYTJxgZGxFCNScqEVMzZCgoSiwcLwCCZDU2JzkpSy0dLxFyQlNFRjk//EABkBAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EACcRAQACAgEDAwMFAAAAAAAAAAABAgMRBBIhMUFRgRMioRQjMmFx/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAfJXyu2/dfa5z9xfpG4muHTn8oyNTlHLCFDsuM3CSV4N208b2OgW9DlLi1SnWoVa/ZSq1Z1HkSTXWTbtbuSvbZbEwNlwLpG4nPisI1MZUtKa9Lq1FLW+a0PVqrFq9GvM+KxfMmLo1aqq0qMKbTShZTnf0ZxWqsndSbd0yiOXY0fupG975+xfa2V76fSsW90OzVLmzFUfxqtJVJpWyrq5qMMqikrtVXfv0XiQlcAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5X4tw+quGVurpr5PGtWUKjy9ZkjVklmSjv7kdUFU8W5UoR4XOm4zlTdSTcp1lHWc5Tfo2720ji1+l3Wu1F8MpSjj6cuzdVI2Tkk2000u/vXg/UXR0SJ/wDEHG9bHLWWGpKKjlcMjcXLM0leX3u1l4mBy3yJhZYmnKWE0zrtRxE2otS0atPy89vdZfA+WcPh+YquIpqaqVKahJubcWlkt2Xs9EcxmrM6hNqTXykwALVYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVHW4njMRwyvOLoRtWrwj2Km1OrKEW+3a7y+Ba+JrKGGlN7Ri5P1RV38DnOnzFiKXJ+ZSinJTqein2qs5VHv5yZRnpe1fs1v+1Wb6vT+1Opb/AINX4nTx8Hmwijnje1Oo3lctUrvezdrk45W4/iavPWIwtXqslOhGcckJKTcur1bcmrektu5FE8N50xkuJ0oucbOrTTtCOzkkWVwXiE6fTPQT2xGElBuyWsFVmv8AAl7UUcfFnid5dfCnj/q+/wBe0T/i5gAbmsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFOlPiXyfkDFzvrKk6cbb5qzVJW8+3f2FD8xx6vl/q/owjH3WRZPTnxJSxGCwKes6vXTX9Ckmop+Tbn/ZKt5xrf8pbxa+x3/USItgauTHU5fRqQfukmWrzfi/kvNfDcZtGnWanLwhmhm/RcyopeiWx0jUet5KhU+hOnL2TTg/tmiB0KCNdHHGVjOSsNWveXVqE/6yn2J39bjf2okoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjdkfSvOmzmn5Fym6UJWrYm9ONt407fOy9zy+uaAqri/G/uhz5isWnenD5ul4dXF2TXryyl+WRXmXF58Soru3N3wjh0qXCf6Uu07d11ovckRDGQaxMk97vf1kjxexdNKn8p5Eyd88IrfWyJx/SSKWLg6PMXn4FGEuzKlJ05J6Wcdvst9pA9P4OvMOXG1sBJ6VF11P68Uo1F63HK/yGXwcj42NThPOMalJq9KoqlJp3Uqbb7LfqUoP1M6r4NxKniuE0sRTd4VYRnH1SV7PzWz80BmgAAAAAAAAAAAAAAAAAAAAAAAAAAAABzp0iY2WP6V3SvenhkoJbrsLNUdvHrJW/JR0WcucnYlVuY8XXe85Slr/wCyc5CBvuI0vmJXTSS9V/Ul3FYY+pGWLk4+jd2euq2vr6vtLS5jxSjgJtd0X9iKlWxMj7GVvarFidGfFpVuKTpVLfe24WVtMyU0/G+ZPXwK6JH0e18nN1HXdTT9sJNfakQJf0tcIiuHU8RCNmp5Ztd8Z3av5KS/TfiyX/wduNOpy/WwknrQqKUP6utd2XqnGb/KNbz6lU5Prrwgpe2Eoy/UaD+DzinHnWpTv2amGldecJ02n7nL3gdGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2OT+jt/O1fqw/bOsHscm9Hz+dq/Vh+2TA3nNE/+n1PqP4MgWCwFWtO1ODlbe2y9cnovaWTU4W8XWdFaJxbm/owXpP7UvW0bDCYGlTgqVN00looxlFv3Xu35iWXk8mcXasblXsOTMY43UIX8Osjf/L7T04Bw2th+bKEa1OUG5O2ZaPsy2ktHv3MsjGz+T4PO4uTvGMIL0p1JvLCEfNt/E33L/BKtSivleSUpSTywXZp22UXu5LXtfqOdwy4uXm83rGvy0HNb/iviP6qXwI50A/h/wDm9X4wJTz1g5UeDYmnLupTs/FNaP8AfzIt0A/h/wDm9X4wJeo6UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHscmcgPt1fVD9s6zOTORfv1b8j4zEC3OQcBSq4TFOrGM4yyQcZJNONpNpp73uvca7m7kPhkuHyqdnCuCb6ynG69Uqa9JeSszG5Yxs41KtKGrmlJL6l7/Y7+xjjGOStSrYl4eU1q4xlOpZ20gop2dne+trd2h5PIy545PRWOz0MHGpbF9SbfDA5MoVJ42E8ZipKhRV6PWRUJScpOEG5STcbxtu8zzqN973Ngcl1YpfhXAlDFKvRxMq0YXcrNxrRbc9XCWrtZXdtcz3SbJxytja2IwlOpCLad1J3VlOLcZW12vFv1FfMvmx2i9I3Hs5rhpftPbUfD8dMtNfcSUlu6FVP1Rs1/iZXHQD+H/5vV+MCa9J2KcuFVoPeFCpdeDlG/wAEveQroB/D/wDN6vxgepx72vji1o1LJeup06UABc4AAAAAAAAAAAAAAAAAAAAAAAAAAAOTOSNK9b8n41DrNlC8v9GNejVqNYilNSt/J4mO2bdOm/HxGx78pYGjVxVSc8zqUskqUITcHdtqU+y7yUezdaq0tU9jZcY4PHGcNVOMtcitXaUqqalnyyWj3jrZX07jVcS6P8cmp0q9CE4u8ZdZWg0/J9UbLh3D+IJJYmODqS/naVedKTukm3Hq8rlotspRkpNp3CyOnWpRrlLlbFQ4lLLKmnGV71E9bJ2ilZ3jJ6NeBZ3LlCOAwyjJxd95Rc05Tk7qKg1a95eTNfQ4fJW7cnZp2eIhbR3s/Hwfl4GLVwvEusSw/wAkpJyTlOpialeo1feKdPLGVm982+5xNbWnwisTWNTeZ/DB6S6NOnw6tlupTw85TjJ5nGUk9/C+9iHdAP4f/m9X4wJvxXknFVuHVYutRcpwknKU6sruSerapts8Oivo/q8P5pVepXpT+anHLTjX/Gyu+acEu40Vnt3czC5AAdIAAAAAAAAAAAAAAAAAAAAAAAAAAAIVjeITpYlpZPRzPNmbXzig2rSWiz/7E1ZB8fgpVKkmoqXYUXsr/Owk1q1+LF+Rl5Gt12tx+JajjfM86NGtngmqcqKk05aRlUjCT1vaym5L6vu1H3dn8qcY0YScaNKekraVqc5Oys/RyavzW1tdjxLg9WqsUpU1GFeLi+1Ddqybs+68rPyZH+D4GtTxTbpScngKNNy0dpQw9XrldbvOoL97lOsel1Zs3a4xJcqQxbopOTorJfTLWlSjF5svo/OLS3da56cD5wdXjFCHUKCrQhJuM/QcqeJm7WWtvkjV9NJ7aa6rEcHb5MpRVNuvlwkZQu28tKdFzWW9rpQle29vM8uB8ExUOLYecqTjkw9OE23G6tSxsXHfW0qtDRXV8r/FduYrjmsl5tuE6fMj+RQk4pOeE65K79K07x9ksqv5mz5exkqmLqRkknSqKDtezfU0qj0bffUfsNFi+C1KmCistnCFeCbcVeMnXcHo9nan6s3k7bjlejOONqynHL1tXOlo96cIdzf0DqIr1V0q9JSgAHoKQAAAAAAAAAAAAAAAAAAAAAAAAAAGQ1UJKtNxlVs7bWaunLbW6039RMXsRenTbTyysraaLz/yMfK81XYvEtfi6s46Zqj1W1JtvVvR6+r/AHNFh3WVRLrZPs/j0ZK+V5pa+cVlttuyS42lN0ZXlHyunrvv2kvZbvIvj5ZWlOVO87JPLZ2iknop+LT17r7syTPo1443DMw2ImrXqTdmm81CSvFN3TtFJO1tdnukZ9CrP5TeM55b+jGlN20S8NNU33b+RoqFWOZqVaK0jZtyV1K0lvU7007ea9m44LPNXtGdJ2umkr96aes/Z7Tme3mC0RrtLeqU+r9Kb0/m/BvwaP1wCnJYy8pVHpa07LuWqSb8PtZ6ulN0tJLZ7Ren6T/dnpwyLWIV3e/fa3cd1/nVnnxLdgA9ZmAAAAAAAAAAAAAAAAAAAAAAAAAAB8exF6NWak+yrX0d3fv3VrL3koZEaeEabcHJSunbrJW3d7J39yRj5XmF2L1a7i7SbzOUG1JN54aZu9LNd2aurLx7yPTfzC7c7dm6zwebLtKyqPw1s1s3o7khxrq5Wlmk19GVKW19O1BdlrdpPZbkfxdPFN3ULZd25Unp6Wtqavu42urNPzM09/Vrxzp+qVWCpRUHONqjkpKSzauXZu6mq7S79ci799nwqdpRTlUalJuzlT2k0lFfOXTVtLaq8vFmFQVd4bNPKmm1KWWlHRLW61s3e7d7/aZfD8VOM9FK9u5UrtKzdnks1v67t+BzETtN5jSTUajteLlK127Sg76Na2l4a93cZfDKk5Y1XiopJ993tppbbf8AfbVwq1pQaSmuzpeUY3er7qbt4GfwXDOOJi5Sk5KOt5uUb21stvDdHdZnrrv3Zpj7ZSEAHqMwAAAAAAAAAAAAAAAAAAAAAAAAAAPj2IhLB5pSvJPylFaXv3qz8O/u3JfL0SHYOsqspdVXhU1a+aqUKiTV0002pJ+Jm5NLW10rcVoje2BxDByhF2mrNvXNKCW+reeydr6fCxH4cO17M1JWX8vUytqybUW1dpp99vX3TTFYSt1cttb6OjOXja7hLXc1UsNNVbqkn+bVL3esnf13M8VvHmJXxavu1uEwU1hX2rJuzvWk1paUd209/H9Rs8Jg7V184lZtt9dUd727811u934I+U8LPJ95V9m+oq2srNfi37n9hnYbDSdXWnFaW1w1W+j0TdvA5ml59JLXjXlmTwL6m2ZLR2bcn3W75K+pkcDwuTFeldWeiilq1q33n6lCr1Ttd6O1qcoW08Zy8dTw4Vil91lTlVjncX826lDO1FauMKbbtte+1/UdUw364nSqbxqY2koAPRUAAAAAAAAAAAAAAAAAAAAAAAAAAAHINRJcbxCaX36puvCczr4oLpD6M8auZa2IwlB1aNabnaMoZoSn2ppxk07ZrtWvuBBqvEasKTVOrUh9SpOPwZgLmTHLbGYn+8Vv9RssTy7j4QvPBYqK8XQq296jY1c+CYq//bV//jV/0gei5nx//m4r+8Vv9R7YPmLGvFxzYvEtX1Tr1WtvrGBPhdeMrOhWT8HSqL9RlYbg+Kzp/JsR7KNV/shLY8X4jKpgpKU5SuvxpOXl3kh6AqX8fbpbYarf+1TX6zSUeTOJ1laGBxHdrODpL31LFu9D/INfh1ariMTaNScFCNOLUssbqUm2tL3S28AhZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPiPoAAAAfO8+gAAAAAAAAAAAAAAAAAf/9k="}
          btnText={"Comprar"}
        />
        <Card
          titulo={"Campari"}
          descripcion={"lorem"}
          img={"data:image/jpeg;base64,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"}
          btnText={"Comprar"}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
