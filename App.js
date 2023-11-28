import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [num, setNum] = useState("");
  const [numAnt, setNumAnt] = useState("");
  const [operador, setOperador] = useState("");
  const botones = [
    [
      { valor: "sen", color: "gray" },
      { valor: "cos", color: "gray" },
      { valor: "tan", color: "gray" },
      { valor: "deg", color: "gray" },
    ],
    [
      { valor: "ln", color: "gray" },
      { valor: "log", color: "gray" },
      { valor: "pi", color: "gray" },
      { valor: "rad", color: "gray" },
    ],
    [
      { valor: "1/X", color: "gray" },
      { valor: "!", color: "gray" },
      { valor: "√", color: "gray" },
      { valor: "/", color: "gray" },
    ],
    [
      { valor: "7", color: "lightblue" },
      { valor: "8", color: "lightblue" },
      { valor: "9", color: "lightblue" },
      { valor: "x", color: "gray" },
    ],
    [
      { valor: "4", color: "lightblue" },
      { valor: "5", color: "lightblue" },
      { valor: "6", color: "lightblue" },
      { valor: "-", color: "gray" },
    ],
    [
      { valor: "1", color: "lightblue" },
      { valor: "2", color: "lightblue" },
      { valor: "3", color: "lightblue" },
      { valor: "+", color: "gray" },
    ],
    [
      { valor: "C", color: "gray" },
      { valor: "0", color: "lightblue" },
      { valor: ".", color: "gray" },
      { valor: "=", color: "gray" },
    ],
  ];

  const operacionCompuesta = () => {
    let numero1 = parseFloat(num);
    let numero2 = parseFloat(numAnt);
    switch (operador) {
      case "+":
        setNum(numero2 + numero1);
        break;
      case "-":
        setNum(numero2 - numero1);
        break;
      case "x":
        setNum(numero2 * numero1);
        break;
      case "/":
        setNum(numero2 / numero1);
        break;
    }
  };

  const operacionSimple = (tipo) => {
    let numero = parseFloat(num);
    switch (tipo) {
      case "sen":
        setNum(Math.sin(numero).toPrecision(11));
        break;
      case "cos":
        setNum(Math.cos(numero).toPrecision(11));
        break;
      case "tan":
        setNum(Math.tan(numero).toPrecision(11));
        break;
      case "deg":
        setNum(((numero * 180) / Math.PI).toPrecision(11));
        break;
      case "rad":
        setNum(((numero * Math.PI) / 180).toPrecision(11));
        break;
      case "ln":
        if (numero > 0) {
          setNum(Math.log(numero).toPrecision(11));
          break;
        } else {
          alert("Error: El numero debe ser mayor que 0");
          setNum(0);
          break;
        }
      case "log":
        if (numero > 0) {
          setNum(Math.log10(numero).toPrecision(11));
          break;
        } else {
          alert("Error: El numero debe ser mayor que 0");
          setNum(0);
          break;
        }
      case "1/X":
        if (numero !== 0) {
          setNum((1 / numero).toPrecision(11));
          break;
        } else {
          alert("Error");
          setNum(0);
          break;
        }
      case "√":
        setNum(Math.sqrt(numero).toPrecision(11));
        break;
      case "!":
        if (numero >= 0) {
          if (numero === 0 || numero === 1) {
            setNum(1);
            break;
          } else {
            let result = 1;
            for (let i = 1; i <= numero; i++) {
              result *= i;
            }
            setNum(result.toPrecision(4));
            break;
          }
        } else {
          alert("Error");
          setNum(0);
          break;
        }
      case "pi":
        setNum(Math.PI.toPrecision(11));
        break;
    }
  };

  const handleOnPress = (tipo, opCompuesta, opSimple) => {
    if (tipo === "C") {
      setNum("");
      setNumAnt("");
    } else if (tipo === "=") {
      if (num !== "" && numAnt !== "") {
        opCompuesta();
        setNumAnt("");
        setOperador("");
      }
    } else if (tipo === "+" || tipo === "-" || tipo === "x" || tipo === "/") {
      setNumAnt(num);
      setOperador(tipo);
      setNum("");
    } else if (
      tipo === "sen" ||
      tipo === "cos" ||
      tipo === "tan" ||
      tipo === "deg" ||
      tipo === "rad" ||
      tipo === "ln" ||
      tipo === "log" ||
      tipo === "1/X" ||
      tipo === "√" ||
      tipo === "!" ||
      tipo === "pi"
    ) {
      opSimple(tipo);
    } else {
      if (!num.includes(".") && tipo === ".") setNum(num + tipo);
      else if (tipo !== ".") setNum(num + tipo);
      else alert("Error: Solo puede introducirse una coma.");
    }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignSelf: "center",
        marginVertical: 80,
      }}
    >
      <Text style={{ fontSize: 45, fontWeight: "bold" }}>Calculadora</Text>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
          height: 70,
          width: 340,
          borderRadius: 4,
          borderWidth: 1,
        }}
      >
        <Text style={{ fontSize: 50, textAlign: "right", flex: 1 }}>{num}</Text>
      </View>
      <View style={{ marginTop: 5 }}>
        {botones.map((fila, indiceSup) => (
          <View style={{ flexDirection: "row" }} key={indiceSup}>
            {fila.map((boton, indice) => (
              <View key={indice} style={{ padding: 3 }}>
                <TouchableOpacity
                  style={{
                    borderRadius: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlignVertical: "center",
                    width: 80,
                    height: 80,
                    backgroundColor: boton.color,
                  }}
                  onPress={() =>
                    handleOnPress(
                      boton.valor,
                      operacionCompuesta,
                      operacionSimple
                    )
                  }
                >
                  <Text>{boton.valor}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

