import React, {useState} from 'react';
import Modal from 'react-modal'

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center mt-20 "> 
      {isOpen &
      <Modal className="m-20 bg-dirty-white w-1/2 h-1/2 rounded-xl p-35 align-center shadow"
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setIsOpen(!isOpen);
        }}>
        <div>
          <div>
            <h1 className="mb-15 text-center">Hello World!</h1>
            <button className="p-10 bg-orange"
              style={{}}
              onClick={() => setIsOpen(!isOpen)}>
              Hide Modal
            </button>
          </div>
        </div>
      </Modal>}
      <button className="rounded-xl bg-dark-grey text-white text-sm p-2 m-auto justify-center align-center border border-dirty-white hover:orange hover:cursor-pointer"
        onClick={() => {
          setIsOpen(true)
          console.log("i'm open")
        }}>
        Show Modal
      </button>
    </div>
  );
};

/* const styles = StyleSheet.create({

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
}); */

export default Popup;