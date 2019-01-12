import React, {Component} from 'react';
import FormContent from 'components/ptp__form-layout';
import {layouts} from '../layout';
import {Row, Col, Button, Icon} from 'antd';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';


const edit_view = 0, edit_submit= 1;
class FormAddContent extends Component{
    constructor(props){
        super(props);

        this.state={
            edit:edit_view, 
            dataSubmit:{
            },
            Partner:null,
            id:'',

        }
    }

    changeView = () => {
        this.setState({edit: edit_submit});
    }

    handleSubmit = (values) => {
        this.setState({edit: edit_view});
        if(values!=='error'){
            const obj= {
                id:'12',
                purchDate: '2018-12-22T09:48:25.350Z'
            }
            this.props.onSubmitAdd({...values, ...obj});
            // this.setState({edit: edit_view});
        }
    }

    render(){
        const { edit,  } = this.state;
        const classNames="field-no-radius form-light";
        const type="vertical";
        const trigger =[
            {
                attrbTrigger:'save',
                render:{
                    type:'BUTTON',
                    size:'default',
                    label:'Lưu lại',
                    icon:'download',
                }
            },  
        ]
        const actions=[
            {
                attrbtn: 'save',
                content: (val) => this.handleSubmit(val)
            },
        ]
        const listFields=[
            {
                attrbField:'nameCompany',
                data:{
                    dataType:'TEXT',
                },
                render:{
                    placeholder:'Vui lòng nhập công ty',
                    label:'Tên công ty: ',

                },
                action:{
                }
            },
            {
                attrbField:'email',
                data:{
                    dataType:'EMAIL',
                    validation:{
                        rules: [
                            {
                              type: 'email',
                              message: 'Bạn phải nhập đúng định dạng email!!!'
                            }
                        ],
                    }
                },
                render:{
                    placeholder:'Vui lòng nhập email của bạn',
                    label:'Email: ',
                    validation:{
                        rules: [
                            {
                              required: true,
                              message: 'Trường dữ liệu này là bắt buộc!!!'
                            }
                        ],
                    }
                },
                action:{
                }
            },
            {
                attrbField:'phoneNumber',
                data:{
                    dataType:'PHONE',
                    validation:{
                        rules: [
                            {
                              required: true,
                              message: 'Trường dữ liệu này là bắt buộc!!!'
                            }
                        ],
                    }
                },
                render:{
                    placeholder:'Vui lòng nhập số điện thoại ',
                    label:'Số điện thoại: ',
                   
                },
                action:{
                }
            },
            
            {
                attrbField:'partnerPayment',
                data:{
                    dataType:'SELECT',
                    config:{
                        options:[
                            {
                                text:'Thanh toán online',
                                value:'online',
                            },
                            {
                                text:'Tiền mặt',
                                value:'tienmat',
                            },
                        ]
                    },
                    validation:{
                        rules: [
                            {
                              required: true,
                              message: 'Trường dữ liệu này là bắt buộc!!!'
                            }
                        ],
                    },
                    defaultValue:'online',
                },
                render:{
                    placeholder:'Vui lòng chọn phương thức thanh toán',
                    label:'Phương thức thanh toán: ',
                },
                action:{
                }
            },
            
        ] 
       
        return(
            <Row >
                <Col md={24}>
                    <FormContent
                        layouts={layouts}
                        actions={actions} 
                        trigger={trigger} 
                        classNames={classNames} 
                        type={type} 
                        listFields={listFields}
                        submit= {edit}
                        formID= "addpartner"
                        mode= "edit"
                        handleSubmit= {this.handleSubmit}
                    />
                </Col>
                <Col md={24}>
                    <Button onClick={()=>this.changeView()}>
                        <Icon type="save"></Icon> Save
                    </Button>
                </Col>
            </Row>
            
            
        )
    }
}


const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormAddContent));