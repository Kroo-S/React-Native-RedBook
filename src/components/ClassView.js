import React from "react";
import { View, Text } from "react-native";


class ClassView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "江苏省南京市",
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                address: "江苏省杭州市",
            });
        }, 2000)
    }


    render() {

        //要从props中取出来
        const { name, age, level, sex } = this.props;
        const { address } = this.state;

        return (
            <View style={{ width: 200, height: 200, backgroundColor: "red" }}>
                <Text>
                    {`name=${name}, age=${age}, level=${level}, sex=${sex}`}
                </Text>
                <Text style={{ color: "white", fontSize: 30 }}>{address}</Text>
            </View>
        )
    }

}

export default ClassView