import { ReactComponent as Divisor1 } from '../../assets/img/divisor1.svg';
import './LandingPage.css';
import CardCounting from '../../components/CardCounting/CardCounting';
import { useEffect, useState } from 'react';
import { ReactComponent as Divisor2 } from '../../assets/img/divisor2.svg';
import { calculateTimeLeft } from '../../helpers/CalculateTimeLeft';
import CircleColor from '../../components/CircleColor/CircleColor';
import GalleryPhotos from '../../components/GalleryPhotos/GalleryPhotos';
import useLoading from '../../hooks/useLoading';
import { toast } from 'react-toastify';
import { SendMessage } from '../../apis/MessagesAPI';
import Loading from '../../components/Loading/Loading';
import PixQR from '../../components/PixQR/PixQR';

function LandingPage() {
    const { startLoading, stopLoading, loading } = useLoading();
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [showQR, setShowQR] = useState<boolean>(false);

    function showQRCode() {
        setShowQR(true);
    }

    async function SendMessageToCouple() {
        startLoading();
        try {
            await SendMessage(name, message).then((resp) => {
                setName("");
                setMessage("");
                toast.success(resp.message);
            })
        } catch (error: any) {
            toast.error(error ? error.message : "Não foi possível enviar a mensagem, por favor, tente novamente mais tarde!");
        } finally {
            stopLoading();
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            var time = calculateTimeLeft();
            setDays(time.days);
            setHours(time.hours);
            setMinutes(time.minutes);
            setSeconds(time.seconds);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='container-landing'>
            {loading && <Loading />}
            <div className="img-main">
                {/* <h1>João & Sara</h1> */}
                <h1 className="curved-text">
                    <span>J</span>
                    <span>o</span>
                    <span>ã</span>
                    <span>o</span>
                    <span> </span>
                    <span>&</span>
                    <span> </span>
                    <span>S</span>
                    <span>a</span>
                    <span>r</span>
                    <span>a</span>
                    </h1>
            </div>
            <div className='green-background'>
                <div className='container-infos'>
                    <Divisor2 className='divisor-left' />
                    <Divisor2 className='divisor-right' />
                    <Divisor1 className='divisor' />
                    <h3>Vamos nos Casar!</h3>
                    <h4>08 de Novembro de 2025</h4>
                    <div className='cards-container'>
                        <CardCounting time={days} moment='D' />
                        <CardCounting time={hours} moment='H' />
                        <CardCounting time={minutes} moment='M' />
                        <CardCounting time={seconds} moment='S' />
                    </div>
                    <p className='address-infos'>Rua Luiz Elias rochel número 74 Jardim Novo aeroporto</p>
                    <div className='map'>
                        <iframe
                            width="600"
                            height="450"
                            style={{ border: 0, borderRadius: "1rem" }}
                            loading="lazy"
                            allowFullScreen
                            src={`${`https://www.google.com/maps?q=${encodeURIComponent("Rua Luiz Elias rochel número 74 Jardim Novo aeroporto")}&output=embed`}`}
                        ></iframe>
                    </div>
                    {/* <p className='text-option'>Para quem não mora em <b>ITAPETININGA - SP</b>, recomendamos que optem pelo waze ou google maps!</p> */}
                </div>
            </div>
            {/* <div id="our-history-container" className='container-msg'>
                <h3>Nossa História</h3>
                <p>
                    Nossa história começou de um jeito que nunca imaginamos. Nos conhecemos em um evento da igreja, sem suspeitar que aquele dia marcaria o início de algo tão especial. Era apenas mais um encontro, mas, na verdade, Deus já tinha escrito nossa história.
                    <br />
                    <br />
                    Uma semana depois, tivemos nosso primeiro encontro oficial. Fomos ao cinema assistir O Rei Leão. Já era a sexta vez que um de nós assistia à versão live-action, porque simplesmente amamos esse filme. E, ali, uma nova história começou a ser escrita: nos olhamos e nos apaixonamos.
                    <br />
                    <br />
                    Desde então, nos tornamos inseparáveis. Começamos a sair cada vez mais, compartilhamos sonhos e conquistas. Entre estudos e aprendizados, fomos nos ajudando e crescendo juntos.
                    <br />
                    <br />
                    Aos poucos, percebemos que o que sentíamos era muito mais do que apenas um sentimento passageiro. Queríamos construir uma vida juntos.
                    <br />
                    <br />
                    Seis anos se passaram. Seis anos de amor, risadas, desafios e momentos inesquecíveis. E agora, estamos a poucos passos do dia mais esperado: o nosso casamento! O dia em que diremos “sim” para a nossa história, que começou de forma tão simples e hoje se tornou um dos capítulos mais lindos de nossas vidas.
                    <br />
                    <br />
                    E o que vem pela frente? Ainda não sabemos todos os detalhes, mas temos certeza de uma coisa: vamos continuar vivendo essa história, que Deus escreveu, com amor – como sempre fizemos.
                </p>
            </div> */}
            <div className='colors-container'>
                <Divisor1 className='divisor' />
                <div id="gifts-container" className='gifts-container'>
                    <h3>Lista de Presentes</h3>
                    <p>Clique no botão abaixo para acessar nossa lista de presentes! Ou se preferirem, podem também fazer um pix para nós!</p>
                    <button className='btn-gifts' onClick={showQRCode}>Fazer Pix</button>
                    <a href='https://lista.havan.com.br/Convidado/ItensListaPresente/863693' target='_blank' className='btn-gifts'>Ir para Lista de Presentes</a>
                    {showQR && <PixQR setShowQR={setShowQR} />}
                    <p className='text-bible'>Eclesiastes 4:9-10 - Melhor é serem dois do que um, porque têm melhor recompensa pelo seu trabalho. Pois se um cair, o outro levanta o seu companheiro.</p>
                </div>
            </div>

            <Divisor1 className='divisor' />
            <div className='message-container'>
                <h3>Escreva uma Mensagem</h3>
                <div className='inputs-container'>
                    <div className='input-container'>
                        <label>Nome:</label>
                        <input value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='input-container'>
                        <label>Mensagem:</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} />
                    </div>
                </div>
                <button disabled={name === "" || message === ""} onClick={SendMessageToCouple} className='btn-send-message'>Enviar</button>
            </div>
        </div>
    )
}

export default LandingPage;