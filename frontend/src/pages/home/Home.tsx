import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Home: React.FC = () => {
  return (
    <IonPage>

      <IonHeader class="ion-no-border">
        <IonToolbar className="header">
          <Header />
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

      </IonContent>

      <IonToolbar>
        <Footer />
      </IonToolbar>

    </IonPage>
  );
};

export default Home;
