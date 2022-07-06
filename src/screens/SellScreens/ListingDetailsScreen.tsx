import { View, Text, TouchableOpacity, ScrollView, Image, Platform, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Auth, Storage, DataStore } from 'aws-amplify';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Category, Product } from '../../models';
import { useNavigation } from '@react-navigation/native';

const ListingDetailsScreen = (props: any) => {

    const navigation = useNavigation();
    const [image, setImage] = useState<any>(null)
    const [image2, setImage2] = useState<any>(null)
    const [image3, setImage3] = useState<any>(null)
    const [brand, setBrand] = useState<any>(null)
    const [price, setPrice] = useState<any>(null)
    const [numReviews, setNumReviews] = useState<any>(1)
    const [name, setName] = useState<any>()
    const [description, setDescription] = useState<any>(null)
    const [type, setType] = useState<any>("info")
    const [time, setTime] = useState<any>(30)
    const [isFeatured, setIsFeatured] = useState<any>(true)
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState<Boolean>(false);
    const categoryName = props.route.params.selectedCategory.name
    const categoryId = props.route.params.selectedCategory.id
    const categorySrc = props.route.params.selectedCategory.src

    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } =
                    await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert("Lütfen medya erişim izni veriniz");
                }
            }
        })()
    }, [])

    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser)
    }, [])

    const sub = user?.attributes?.sub;

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        if (!result.cancelled) {
            if (!image && !image2 && !image3) {
                setImage(result.uri)
            }
            if (image && !image2 && !image3) {
                setImage2(result.uri)
            }
            if (image && image2 && !image3) {
                setImage3(result.uri)
            }
        }
    }

    const getImageBlob = async () => {
        if (!image && !image2 && !image3) {
            return
        }
        const response = await fetch(image);
        const response2 = await fetch(image2);
        const response3 = await fetch(image3);
        const blob = await response.blob();
        const blob2 = await response2.blob();
        const blob3 = await response3.blob();
        return {
            blob,
            blob2,
            blob3
        }
    }

    const resetFields = () => {
        setImage(null),
            setImage2(null),
            setImage3(null),
            setBrand(null),
            setPrice(null),
            setName(null),
            setDescription(null)
    }

    const postProduct = async () => {
        if (!image && !image2 && !image3) {
            return
        }
        setLoading(true);
        const blobs = await getImageBlob();
        const blob = blobs;
        const blob2 = blobs?.blob2;
        const blob3 = blobs?.blob3;
        const result = await Storage.put(`${uuidv4()}.png`, blob)
        const result2 = await Storage.put(`${uuidv4()}.png`, blob2)
        const result3 = await Storage.put(`${uuidv4()}.png`, blob3)
        await DataStore.save(
            new Product({
                image: result.key,
                brand: brand,
                price: parseFloat(price),
                numReviews: numReviews,
                isFeatured: isFeatured,
                name: name,
                images: [
                    result.key,
                    result2.key,
                    result3.key,
                ],
                description: description,
                category: {
                    id: categoryId,
                    name: categoryName,
                    src: categorySrc
                },
                type: type,
                time: time,
                userID: sub
            })
        ).then(
            Alert.alert('İlan paylaşıldı!'))
        setLoading(false)
        resetFields()
        navigation.navigate('Ana Sayfa')
    }

    if (loading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#F24E61' }}>İlan Paylaşılıyor</Text>
            <ActivityIndicator size="large" color={'#F24E61'} />
        </View>
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ margin: 20 }}>
                <TouchableOpacity style={{
                    width: 80,
                    height: 80,
                    borderRadius: 25,
                    borderWidth: 1,
                    borderColor: '#959595',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                    onPress={pickImage}
                >
                    {
                        image ?
                            <Image
                                source={{ uri: image }}
                                style={{
                                    width: 75,
                                    height: 75,
                                    borderRadius: 22
                                }}
                            /> : <Text>Resim ekle</Text>
                    }
                </TouchableOpacity>
                {
                    image &&
                    <TouchableOpacity style={{
                        width: 80,
                        height: 80,
                        borderRadius: 25,
                        borderWidth: 1,
                        borderColor: '#959595',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 10
                    }}
                        onPress={pickImage}
                    >
                        {
                            image2 ?
                                <Image
                                    source={{ uri: image2 }}
                                    style={{
                                        width: 75,
                                        height: 75,
                                        borderRadius: 22
                                    }}
                                /> : <Text>Resim ekle</Text>
                        }
                    </TouchableOpacity>
                }
                {
                    image2 &&
                    <TouchableOpacity style={{
                        width: 80,
                        height: 80,
                        borderRadius: 25,
                        borderWidth: 1,
                        borderColor: '#959595',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 10
                    }}
                        onPress={pickImage}
                    >
                        {
                            image3 ?
                                <Image
                                    source={{ uri: image3 }}
                                    style={{
                                        width: 75,
                                        height: 75,
                                        borderRadius: 22
                                    }}
                                /> : <Text>Resim ekle</Text>
                        }
                    </TouchableOpacity>
                }
            </ScrollView>
            <Text style={{ fontSize: 10, color: '#959595', marginHorizontal: 20 }}>Tip: add atleast 3 photos</Text>
            <View style={{ backgroundColor: '#eeeeee', margin: 30, borderRadius: 10, padding: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Category</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{categoryName}</Text>
            </View>
            <View style={{ marginHorizontal: 30, marginBottom: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Marka</Text>
                <TextInput
                    placeholder='Ürün markasını giriniz'
                    style={{ marginTop: 10, width: '100%', backgroundColor: '#eeeeee', padding: 10, borderRadius: 10 }}
                    value={brand}
                    onChangeText={(text) => setBrand(text)}
                />
            </View>
            <View style={{ marginHorizontal: 30, marginBottom: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Fiyat</Text>
                <TextInput
                    placeholder='Ürünün fiyatını giriniz'
                    style={{ marginTop: 10, width: '100%', backgroundColor: '#eeeeee', padding: 10, borderRadius: 10 }}
                    value={price}
                    onChangeText={(text) => setPrice(text)}
                />
                <Text style={{ fontSize: 10, color: '#959595', marginTop: 5 }}>Rekabetçi bir fiyat belirleyin</Text>
            </View>
            <View style={{ marginHorizontal: 30, marginBottom: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Ürün Adı</Text>
                <TextInput
                    placeholder='Ürünün adını giriniz'
                    style={{ marginTop: 10, width: '100%', backgroundColor: '#eeeeee', padding: 10, borderRadius: 10 }}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
            </View>
            <View style={{ marginHorizontal: 30, marginBottom: 30 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Açıklama</Text>
                <TextInput
                    placeholder='Ürünün açıklamasını giriniz'
                    style={{ marginTop: 10, width: '100%', backgroundColor: '#eeeeee', padding: 10, borderRadius: 10 }}
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                />
                <Text style={{ fontSize: 10, color: '#959595', marginTop: 5 }}>Sattığınız ürünü detaylı bir şekilde açıklayın</Text>
            </View>
            <TouchableOpacity
                onPress={postProduct}
                style={{ alignSelf: 'center', width: '94%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F24E61', padding: 10, borderRadius: 30 }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Paylaş</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ListingDetailsScreen