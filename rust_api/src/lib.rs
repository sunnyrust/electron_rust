extern crate rustc_serialize;
use rustc_serialize::json;

/// 获取计算机主机cpu核心量
#[no_mangle]
pub extern "C" fn get_cpus(x: i32) -> i32 {
    let result: i32 = num_cpus::get() as i32;
    return result * x;
}

/// 测试返回json字符串
#[no_mangle]
pub extern "C" fn res_json() -> &'static str {
    let mut json_arr = Vec::new();
    let obj1 = TestStruct {
        id: 12312,
        age: 25,
        name: "002:精英单人少儿A组拉丁舞4组初赛".to_string(),
        dance_ids: "21,33,565,23".to_string(),
        m_dance_ids: "1,2,3,4,5,6,7,8".to_string(),
        dance_num: 5,
        type_id: 221,
        age_min: 9,
        age_max: 30,
        is_alimighty: true,
        is_unify_time: false,
        is_check_clothing: true,
        is_zip_num: false,
        team_num: 13,
        admit_num: 6,
        first_repet: 24,
        repet_half: 12,
        half_last: 6,
        stage_id: 45,
        sd_id: 111,
        cost: 33.4531,
        gi_id: 1,
        node: "我的测试rust ===> js".to_string(),
    };
    let obj2 = TestStruct {
        id: 12312,
        age: 25,
        name: "002:精英单人少儿A组拉丁舞4组初赛".to_string(),
        dance_ids: "21,33,565,23".to_string(),
        m_dance_ids: "1,2,3,4,5,6,7,8".to_string(),
        dance_num: 5,
        type_id: 221,
        age_min: 9,
        age_max: 30,
        is_alimighty: true,
        is_unify_time: false,
        is_check_clothing: true,
        is_zip_num: false,
        team_num: 13,
        admit_num: 6,
        first_repet: 24,
        repet_half: 12,
        half_last: 6,
        stage_id: 45,
        sd_id: 111,
        cost: 33.4531,
        gi_id: 1,
        node: "我的测试rust ===> js".to_string(),
    };
    let obj3 = TestStruct {
        id: 12312,
        age: 25,
        name: "002:精英单人少儿A组拉丁舞4组初赛".to_string(),
        dance_ids: "21,33,565,23".to_string(),
        m_dance_ids: "1,2,3,4,5,6,7,8".to_string(),
        dance_num: 5,
        type_id: 221,
        age_min: 9,
        age_max: 30,
        is_alimighty: true,
        is_unify_time: false,
        is_check_clothing: true,
        is_zip_num: false,
        team_num: 13,
        admit_num: 6,
        first_repet: 24,
        repet_half: 12,
        half_last: 6,
        stage_id: 45,
        sd_id: 111,
        cost: 33.4531,
        gi_id: 1,
        node: "我的测试rust ===> js".to_string(),
    };
    json_arr.push(obj1);
    json_arr.push(obj2);
    json_arr.push(obj3);

    let json_data = RespData {
        code: 0,
        msg: "获取数据成功".to_string(),
        data: json_arr,
    };

    let encoded = json::encode(&json_data).unwrap();
    Box::leak(encoded.into_boxed_str())
}

#[derive(RustcEncodable)]
pub struct RespData<T> {
    code: i32,
    msg: String,
    data: T,
}

#[derive(RustcEncodable)]
struct TestStruct {
    id: i32,
    age: i32,
    name: String,
    dance_ids: String,
    m_dance_ids: String,
    dance_num: i32,
    type_id: i32,
    age_min: i32,
    age_max: i32,
    is_alimighty: bool,
    is_unify_time: bool,
    is_check_clothing: bool,
    is_zip_num: bool,
    team_num: i32,
    admit_num: i32,
    first_repet: i32,
    repet_half: i32,
    half_last: i32,
    stage_id: i32,
    sd_id: i32,
    cost: f64,
    gi_id: i32,
    node: String,
}
